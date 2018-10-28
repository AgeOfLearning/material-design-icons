import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDomainElement
 * @class IconSharpDomainElement
 * @extends {AoflElement}
 */
class IconSharpDomainElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDomainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-domain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDomainElement.is, IconSharpDomainElement);

export default IconSharpDomainElement;
