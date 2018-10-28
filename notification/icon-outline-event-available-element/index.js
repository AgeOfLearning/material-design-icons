import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEventAvailableElement
 * @class IconOutlineEventAvailableElement
 * @extends {AoflElement}
 */
class IconOutlineEventAvailableElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEventAvailableElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-event-available';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEventAvailableElement.is, IconOutlineEventAvailableElement);

export default IconOutlineEventAvailableElement;
