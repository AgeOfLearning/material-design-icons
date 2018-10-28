import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCallToActionElement
 * @class IconOutlineCallToActionElement
 * @extends {AoflElement}
 */
class IconOutlineCallToActionElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCallToActionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-call-to-action';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCallToActionElement.is, IconOutlineCallToActionElement);

export default IconOutlineCallToActionElement;
