import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDomainElement
 * @class IconOutlineDomainElement
 * @extends {AoflElement}
 */
class IconOutlineDomainElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDomainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-domain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDomainElement.is, IconOutlineDomainElement);

export default IconOutlineDomainElement;
