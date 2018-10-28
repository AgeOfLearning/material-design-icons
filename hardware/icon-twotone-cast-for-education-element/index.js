import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCastForEducationElement
 * @class IconTwotoneCastForEducationElement
 * @extends {AoflElement}
 */
class IconTwotoneCastForEducationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCastForEducationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cast-for-education';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCastForEducationElement.is, IconTwotoneCastForEducationElement);

export default IconTwotoneCastForEducationElement;
