import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDomainDisabledElement
 * @class IconOutlineDomainDisabledElement
 * @extends {AoflElement}
 */
class IconOutlineDomainDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDomainDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-domain-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDomainDisabledElement.is, IconOutlineDomainDisabledElement);

export default IconOutlineDomainDisabledElement;
