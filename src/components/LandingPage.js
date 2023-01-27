import React, { useState } from "react";
import chatIcon from "../assets/images/chat-icon.png";
import headerLogo from "../assets/images/landing-page-logo.png";
import PropTypes from "prop-types";

function LandingPage({ openChat }) {
  const [slideOut, setSlideOut] = useState(false);

  function startChat() {
    setSlideOut(true);
    openChat();
  }

  return (
    <div className="landing-page">
      <img
        className={`landing-page__header-logo ${slideOut ? "slide-out" : ""}`}
        src={headerLogo}
        alt="header-logo"
      />
      
      <h1 className={`landing-page__title ${slideOut ? "slide-out" : ""}`}>
        Helping you find your way to a better <span>YOU</span>
      </h1>

      <p className={`landing-page__description ${slideOut ? "slide-out" : ""}`}>
        Get help anytime with beBetter - the AI-powered chatbot for personal
        growth. Personalized mentorship to improve in any aspect of your life.
        Start chatting your way to a better you.
      </p>

      <button
        className={`landing-page__cta-button ${slideOut ? "slide-out" : ""}`}
        onClick={startChat}
      >
        Start Chat
      </button>

      <svg
        aria-hidden="true"
        className={`landing-page__bg-logo ${slideOut ? "slide-out" : ""}`}
        data-testid="bg-logo"
        width="805"
        height="955"
        viewBox="0 0 805 955"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4879 429.856C25.6871 410.097 92.6213 341.946 112.961 321.336C113.34 144.083 268.415 0 458.979 0C649.776 0 805 144.447 805 321.998C805 441.593 734.919 549.973 621.769 606.157C621.698 606.21 574.401 628.403 574.401 689.271V935.07C574.401 946.053 565.501 954.953 554.517 954.953H276.35C265.369 954.953 256.467 946.053 256.467 935.07V827.758C253.882 784.594 247.914 775.113 223.239 774.607H223.231C223.231 774.607 155.799 774.703 153.805 774.703C142.368 774.703 116.67 772.401 96.2826 753.748C79.3708 738.275 70.7969 716.053 70.7969 687.702V565.085C62.6975 555.474 45.5417 535.405 33.4948 523.358C-13.1871 476.676 -0.957243 444.74 10.4879 429.856ZM61.6105 495.234C79.1136 512.737 104.907 543.867 105.997 545.185C108.947 548.751 110.562 553.231 110.562 557.86V687.702C110.562 704.306 114.724 716.594 122.935 724.23C135.793 736.189 155.849 734.882 155.894 734.879C156.483 734.826 223.87 734.845 223.87 734.845C223.9 734.845 223.923 734.845 223.953 734.845C302.218 736.884 296.234 826.78 296.234 827.167V915.183H534.633V688.659C534.633 688.272 528.008 609.842 595.483 575.045C715.687 513.053 765.232 427.852 765.232 322.001C765.232 166.377 627.848 39.7676 458.979 39.7676C290.11 39.7676 152.726 166.377 152.726 321.998C152.726 324.504 152.766 327.007 152.835 329.499C153.036 336.665 149.404 343.115 143.725 346.776C116.903 373.898 54.8155 437.455 42.0077 454.101C33.1024 465.684 56.7748 490.399 61.6105 495.234Z"
          fill="white"
          fillOpacity="0.18"
        />
        <path
          d="M399.403 228.765H425.727C428.696 211.755 435.398 196.02 444.966 182.43L426.323 163.787C418.555 156.019 418.558 143.429 426.323 135.666C434.088 127.903 446.679 127.901 454.442 135.669L473.085 154.312C486.675 144.744 502.412 138.041 519.422 135.069V108.746C519.422 97.7621 528.322 88.8621 539.306 88.8621C550.287 88.8621 559.189 97.7621 559.189 108.746V135.069C576.199 138.041 591.934 144.741 605.521 154.312L624.164 135.669C631.93 127.901 644.52 127.903 652.283 135.666C660.051 143.431 660.051 156.022 652.283 163.787L633.64 182.43C643.205 196.02 649.907 211.755 652.879 228.765H679.203C690.187 228.765 699.087 237.665 699.087 248.648C699.087 259.632 690.187 268.532 679.203 268.532H652.879C649.907 285.542 643.208 301.277 633.637 314.869L652.283 333.515C660.051 341.28 660.051 353.871 652.283 361.636C648.402 365.518 643.311 367.458 638.224 367.458C633.133 367.458 628.046 365.517 624.162 361.634L605.519 342.988C591.929 352.559 576.197 359.263 559.187 362.23V388.551C559.187 399.535 550.284 408.435 539.303 408.435C528.319 408.435 519.419 399.535 519.419 388.551V362.23C502.409 359.263 486.672 352.559 473.082 342.99L454.439 361.634C450.555 365.517 445.467 367.458 440.377 367.458C435.289 367.458 430.199 365.518 426.318 361.636C418.553 353.871 418.55 341.28 426.318 333.515L444.964 314.869C435.396 301.277 428.691 285.545 425.721 268.532H399.398C388.417 268.532 379.514 259.632 379.514 248.648C379.514 237.665 388.422 228.765 399.403 228.765ZM539.303 324.212C580.966 324.212 614.861 290.314 614.861 248.648C614.861 206.983 580.966 173.087 539.303 173.087C497.637 173.087 463.742 206.983 463.742 248.648C463.742 290.314 497.637 324.212 539.303 324.212Z"
          fill="white"
          fillOpacity="0.18"
          className="big-gear"
        />
        <path
          d="M216.375 377.203H232.327C234.602 366.847 238.677 356.818 244.549 347.605L233.295 336.351C225.529 328.586 225.529 315.995 233.295 308.233C241.06 300.47 253.65 300.467 261.413 308.235L272.651 319.474C281.734 313.657 291.729 309.516 302.265 307.207V291.313C302.265 280.332 311.165 271.429 322.146 271.429C333.127 271.429 342.033 280.329 342.033 291.313V307.207C352.568 309.516 362.563 313.657 371.646 319.474L382.882 308.235C390.647 300.47 403.238 300.467 411 308.233C418.768 315.998 418.768 328.588 411 336.351L399.749 347.605C405.624 356.818 409.696 366.847 411.971 377.203H427.92C438.901 377.203 447.804 386.103 447.807 397.084C447.807 408.068 438.904 416.971 427.923 416.971H411.971C409.699 427.326 405.624 437.361 399.751 446.571L411.003 457.82C418.768 465.585 418.768 478.176 411.003 485.941C407.119 489.825 402.031 491.766 396.941 491.766C391.853 491.766 386.763 489.825 382.882 485.944L371.644 474.708C362.561 480.522 352.566 484.666 342.03 486.972V502.866C342.027 513.847 333.127 522.747 322.143 522.747C311.162 522.747 302.26 513.844 302.262 502.861V486.97C291.727 484.66 281.732 480.522 272.649 474.703L261.41 485.944C257.526 489.825 252.439 491.766 247.349 491.766C242.261 491.766 237.171 489.825 233.289 485.944C225.521 478.176 225.521 465.588 233.289 457.823L244.541 446.571C238.666 437.358 234.596 427.329 232.322 416.973H216.367C205.386 416.973 196.483 408.071 196.486 397.087C196.488 386.106 205.394 377.203 216.375 377.203ZM285.181 434.057C295.059 443.936 308.188 449.371 322.154 449.371C336.12 449.371 349.246 443.933 359.119 434.063C379.504 413.678 379.502 380.506 359.117 360.119C349.241 350.243 336.113 344.808 322.149 344.808C308.182 344.808 295.054 350.246 285.181 360.119C264.796 380.506 264.796 413.673 285.181 434.057Z"
          fill="white"
          fillOpacity="0.18"
          className="small-gear"
        />
      </svg>

      <img
        className={`landing-page__bg-chat-icon ${slideOut ? "slide-out" : ""}`}
        src={chatIcon}
        aria-hidden="true"
        alt="chat-icon"
      />
    </div>
  );
}

LandingPage.propTypes = {
  openChat: PropTypes.func.isRequired,
};

export default LandingPage;
