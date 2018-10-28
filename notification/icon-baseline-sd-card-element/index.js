import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSdCardElement
 * @class IconBaselineSdCardElement
 * @extends {AoflElement}
 */
class IconBaselineSdCardElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSdCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sd-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSdCardElement.is, IconBaselineSdCardElement);

export default IconBaselineSdCardElement;
