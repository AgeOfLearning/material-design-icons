import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePeopleElement
 * @class IconOutlinePeopleElement
 * @extends {AoflElement}
 */
class IconOutlinePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePeopleElement.is, IconOutlinePeopleElement);

export default IconOutlinePeopleElement;
