import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropElement
 * @class IconBaselineCropElement
 * @extends {AoflElement}
 */
class IconBaselineCropElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropElement.is, IconBaselineCropElement);

export default IconBaselineCropElement;
