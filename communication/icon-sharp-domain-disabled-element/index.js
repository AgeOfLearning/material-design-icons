import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDomainDisabledElement
 * @class IconSharpDomainDisabledElement
 * @extends {AoflElement}
 */
class IconSharpDomainDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDomainDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-domain-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDomainDisabledElement.is, IconSharpDomainDisabledElement);

export default IconSharpDomainDisabledElement;
