import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNaturePeopleElement
 * @class IconOutlineNaturePeopleElement
 * @extends {AoflElement}
 */
class IconOutlineNaturePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNaturePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-nature-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNaturePeopleElement.is, IconOutlineNaturePeopleElement);

export default IconOutlineNaturePeopleElement;
