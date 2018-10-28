import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSlideshowElement
 * @class IconRoundSlideshowElement
 * @extends {AoflElement}
 */
class IconRoundSlideshowElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSlideshowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-slideshow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSlideshowElement.is, IconRoundSlideshowElement);

export default IconRoundSlideshowElement;
