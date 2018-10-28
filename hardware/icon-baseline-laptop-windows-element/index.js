import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLaptopWindowsElement
 * @class IconBaselineLaptopWindowsElement
 * @extends {AoflElement}
 */
class IconBaselineLaptopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLaptopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-laptop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLaptopWindowsElement.is, IconBaselineLaptopWindowsElement);

export default IconBaselineLaptopWindowsElement;
