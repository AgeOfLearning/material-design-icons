import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLaptopElement
 * @class IconBaselineLaptopElement
 * @extends {AoflElement}
 */
class IconBaselineLaptopElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLaptopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-laptop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLaptopElement.is, IconBaselineLaptopElement);

export default IconBaselineLaptopElement;
