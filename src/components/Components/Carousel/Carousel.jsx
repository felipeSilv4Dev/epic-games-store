import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import { useNavigate } from "react-router-dom";

const Carousel = forwardRef(function SildeComponent(props, ref) {
  const wrapper = ref;

  const slide = useRef();
  const controls = useRef();
  const navigate = useNavigate();
  let dist = useCallback(() => {
    return {
      pageX: 0,
      movement: 0,
      moveFinal: 0,
      mov: 0,
      moveDist: 0,
      slideArray: null,
    };
  }, []);

  let indexDetect = useCallback(() => {
    return {
      prev: "",
      now: "",
      next: "",
    };
  }, [])();

  const slideConfig = useCallback(() => {
    if (!slide.current) return;

    dist.slideArray = [...slide.current.children].map((element, i, arr) => {
      let position;
      if (i === 0) {
        position = element.offsetLeft;
      } else if (i === arr.length - 1) {
        let porcet = wrapper.current.offsetWidth - element.offsetWidth;

        position = -element.offsetLeft + porcet;
      } else {
        const right =
          (window.innerWidth -
            (element.offsetWidth + wrapper.current.offsetLeft * 2)) /
          2;

        position = -(element.offsetLeft - right);
      }

      return { element, position };
    });
  }, [dist, slide, wrapper]);

  const transition = useCallback(
    (active) => {
      if (!slide.current) return;
      slide.current.style.transition = active ? "all .3s" : "";
    },
    [slide]
  );

  const slidePosition = useCallback(
    (clientX) => {
      dist.movement = (dist.pageX - clientX) * 1.6;

      return dist.moveFinal - dist.movement;
    },
    [dist]
  );
  const moveSlide = useCallback(
    (distX) => {
      dist.moveDist = distX;

      slide.current.style.transform = `translate3d(${distX}px,0,0)`;
    },
    [dist, slide]
  );

  const onMove = useCallback(
    (e) => {
      transition(false);
      let clientX =
        e.type === "mousemove" ? e.clientX : e.changedTouches[0].clientX;

      dist.mov = clientX;

      if (clientX > 0) {
        slideConfig();
      }
      if (dist.mov > 350) {
        document.body.style.overflowY = "hidden";
      }
      const positionMovement = slidePosition(clientX);

      moveSlide(positionMovement);
    },
    [moveSlide, slidePosition, slideConfig, dist, transition]
  );

  const slideIndexNav = useCallback(
    (indexSlide) => {
      indexDetect.prev = indexSlide > 0 ? indexSlide - 1 : null;
      indexDetect.now = indexSlide;
      indexDetect.next =
        indexSlide < dist.slideArray.length - 1 ? indexSlide + 1 : null;
    },
    [indexDetect, dist]
  );

  const changeSlide = useCallback(
    (index) => {
      transition(true);

      const slideIndex = dist.slideArray[index];

      if (!slideIndex) return;
      slideIndexNav(index);
      moveSlide(slideIndex.position);
      dist.moveFinal = slideIndex.position;
    },
    [dist, moveSlide, slideIndexNav, transition]
  );

  const activePrevSlide = useCallback(() => {
    if (indexDetect.prev !== null) {
      changeSlide(indexDetect.now - 1);
    }
  }, [indexDetect, changeSlide]);

  const activeNextSlide = useCallback(() => {
    if (indexDetect.next !== null) {
      changeSlide(indexDetect.now + 1);
    }
  }, [changeSlide, indexDetect]);

  const changeSlideOnEnd = useCallback(() => {
    if (dist.mov) {
      const lengthProps = props.children.length;
      if (dist.movement > 20 * lengthProps && indexDetect.next !== null) {
        activeNextSlide();
      }
      if (dist.movement < -(20 * lengthProps) && indexDetect.prev !== null) {
        activePrevSlide();
      } else {
        changeSlide(indexDetect.now);
      }
    }
  }, [activeNextSlide, changeSlide, dist, activePrevSlide, indexDetect, props]);

  const addControlActive = useCallback(() => {
    if (!controls.current) return;
    const controlsAr = Array.from(controls.current.children);

    controlsAr.map((link) => {
      link.classList.remove("active");
    });

    if (!controlsAr[indexDetect.now]) return;
    controlsAr[indexDetect.now].classList.add("active");
  }, [indexDetect]);

  const onEnd = useCallback(
    (e) => {
      const event = e.type === "mouseup" ? "mousemove" : "touchmove";
      document.body.style.overflowY = "initial";

      if (!wrapper.current) return;

      wrapper.current.removeEventListener(event, onMove);
      dist.moveFinal = dist.moveDist;
      changeSlideOnEnd();
      addControlActive();
      transition(true);
    },
    [dist, onMove, changeSlideOnEnd, transition, addControlActive, wrapper]
  );

  const onStart = useCallback(
    (e) => {
      let event;
      let eventFinal;
      if (wrapper.current)
        if (e.type === "mousedown") {
          e.preventDefault();
          const { pageX } = e;
          eventFinal = "mouseup";
          event = "mousemove";

          dist.pageX = pageX;
        }

      if (e.type === "touchstart") {
        eventFinal = "touchend";
        event = "touchmove";

        dist.pageX = e.changedTouches[0].clientX;
      }

      wrapper.current.addEventListener(event, onMove);
      window.addEventListener(eventFinal, onEnd);
      transition(false);
    },
    [dist, onEnd, transition, onMove, wrapper]
  );

  const eventControl = useCallback(
    (e) => {
      e.preventDefault();
      const { id } = e.currentTarget;

      if (!controls.current) return;
      [...controls.current.children].map((link) => {
        link.classList.remove("active");
      });

      e.currentTarget.classList.add("active");
      changeSlide(+id);
    },
    [changeSlide]
  );
  const handleClick = useCallback(
    ({ target }) => {
      if (dist.mov == 0) {
        const { id } = target.closest("section");

        if (id) {
          navigate(`game/${id}`);
        }
      }
    },
    [dist, navigate]
  );

  useEffect(() => {
    const addSlide = () => {
      if (wrapper.current) {
        wrapper.current.addEventListener("mousedown", onStart);
        wrapper.current.addEventListener("touchstart", onStart);

        slideConfig();
        changeSlide(0);
        window.addEventListener("pointerdown", () => (dist.mov = 0));
      }

      if (!props.control) return;
      if (!controls.current.children.length) return;
      controls.current.children[0].classList.add("active");
    };
    addSlide();
  }, [wrapper, slideConfig, onStart, changeSlide, props, addControlActive, dist]);

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <div onClick={handleClick} ref={slide} className={styles.slide}>
        {props.children}
      </div>

      {props.control && (
        <span className={styles.controls}>
          <ul ref={controls} data-control="slide">
            {props.children
              .filter((child) => child !== undefined)
              .map((child, i) => {
                const { id } = child.props;

                return (
                  <a key={id} id={i} onClick={eventControl} href={"#" + id}>
                    {id}
                  </a>
                );
              })}
          </ul>
        </span>
      )}
    </div>
  );
});

export default Carousel;
