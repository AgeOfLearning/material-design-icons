import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocalDiningElement
 * @class IconTwotoneLocalDiningElement
 * @extends {AoflElement}
 */
class IconTwotoneLocalDiningElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocalDiningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-local-dining';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocalDiningElement.is, IconTwotoneLocalDiningElement);

export default IconTwotoneLocalDiningElement;
