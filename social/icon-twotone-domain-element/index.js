import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDomainElement
 * @class IconTwotoneDomainElement
 * @extends {AoflElement}
 */
class IconTwotoneDomainElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDomainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-domain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDomainElement.is, IconTwotoneDomainElement);

export default IconTwotoneDomainElement;
