import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCallToActionElement
 * @class IconTwotoneCallToActionElement
 * @extends {AoflElement}
 */
class IconTwotoneCallToActionElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCallToActionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-call-to-action';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCallToActionElement.is, IconTwotoneCallToActionElement);

export default IconTwotoneCallToActionElement;
