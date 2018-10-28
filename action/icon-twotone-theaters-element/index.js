import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTheatersElement
 * @class IconTwotoneTheatersElement
 * @extends {AoflElement}
 */
class IconTwotoneTheatersElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTheatersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-theaters';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTheatersElement.is, IconTwotoneTheatersElement);

export default IconTwotoneTheatersElement;
