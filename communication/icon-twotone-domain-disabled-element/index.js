import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDomainDisabledElement
 * @class IconTwotoneDomainDisabledElement
 * @extends {AoflElement}
 */
class IconTwotoneDomainDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDomainDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-domain-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDomainDisabledElement.is, IconTwotoneDomainDisabledElement);

export default IconTwotoneDomainDisabledElement;
