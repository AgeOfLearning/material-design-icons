import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEventAvailableElement
 * @class IconTwotoneEventAvailableElement
 * @extends {AoflElement}
 */
class IconTwotoneEventAvailableElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEventAvailableElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-event-available';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEventAvailableElement.is, IconTwotoneEventAvailableElement);

export default IconTwotoneEventAvailableElement;
