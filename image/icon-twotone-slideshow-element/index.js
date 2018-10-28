import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSlideshowElement
 * @class IconTwotoneSlideshowElement
 * @extends {AoflElement}
 */
class IconTwotoneSlideshowElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSlideshowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-slideshow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSlideshowElement.is, IconTwotoneSlideshowElement);

export default IconTwotoneSlideshowElement;
