import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalBarElement
 * @class IconOutlineLocalBarElement
 * @extends {AoflElement}
 */
class IconOutlineLocalBarElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalBarElement.is, IconOutlineLocalBarElement);

export default IconOutlineLocalBarElement;
