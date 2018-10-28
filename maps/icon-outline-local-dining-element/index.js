import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalDiningElement
 * @class IconOutlineLocalDiningElement
 * @extends {AoflElement}
 */
class IconOutlineLocalDiningElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalDiningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-dining';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalDiningElement.is, IconOutlineLocalDiningElement);

export default IconOutlineLocalDiningElement;
