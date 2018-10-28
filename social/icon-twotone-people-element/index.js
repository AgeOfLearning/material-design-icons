import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePeopleElement
 * @class IconTwotonePeopleElement
 * @extends {AoflElement}
 */
class IconTwotonePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePeopleElement.is, IconTwotonePeopleElement);

export default IconTwotonePeopleElement;
