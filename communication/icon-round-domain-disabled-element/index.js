import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDomainDisabledElement
 * @class IconRoundDomainDisabledElement
 * @extends {AoflElement}
 */
class IconRoundDomainDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDomainDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-domain-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDomainDisabledElement.is, IconRoundDomainDisabledElement);

export default IconRoundDomainDisabledElement;
