import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEventElement
 * @class IconOutlineEventElement
 * @extends {AoflElement}
 */
class IconOutlineEventElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEventElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-event';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEventElement.is, IconOutlineEventElement);

export default IconOutlineEventElement;
