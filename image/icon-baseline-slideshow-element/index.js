import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSlideshowElement
 * @class IconBaselineSlideshowElement
 * @extends {AoflElement}
 */
class IconBaselineSlideshowElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSlideshowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-slideshow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSlideshowElement.is, IconBaselineSlideshowElement);

export default IconBaselineSlideshowElement;
