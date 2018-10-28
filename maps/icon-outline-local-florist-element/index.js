import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalFloristElement
 * @class IconOutlineLocalFloristElement
 * @extends {AoflElement}
 */
class IconOutlineLocalFloristElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalFloristElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-florist';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalFloristElement.is, IconOutlineLocalFloristElement);

export default IconOutlineLocalFloristElement;
