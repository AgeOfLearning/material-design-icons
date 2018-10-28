import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonAddDisabledElement
 * @class IconTwotonePersonAddDisabledElement
 * @extends {AoflElement}
 */
class IconTwotonePersonAddDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonAddDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-person-add-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonAddDisabledElement.is, IconTwotonePersonAddDisabledElement);

export default IconTwotonePersonAddDisabledElement;
