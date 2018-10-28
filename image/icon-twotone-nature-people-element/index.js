import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneNaturePeopleElement
 * @class IconTwotoneNaturePeopleElement
 * @extends {AoflElement}
 */
class IconTwotoneNaturePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneNaturePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-nature-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneNaturePeopleElement.is, IconTwotoneNaturePeopleElement);

export default IconTwotoneNaturePeopleElement;
