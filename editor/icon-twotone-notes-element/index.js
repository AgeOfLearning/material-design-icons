import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNotesElement
 * @class IconTwotoneNotesElement
 * @extends {AoflElement}
 */
class IconTwotoneNotesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNotesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-notes';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNotesElement.is, IconTwotoneNotesElement);

export default IconTwotoneNotesElement;
