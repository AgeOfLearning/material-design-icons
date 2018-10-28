import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDomainElement
 * @class IconRoundDomainElement
 * @extends {AoflElement}
 */
class IconRoundDomainElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDomainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-domain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDomainElement.is, IconRoundDomainElement);

export default IconRoundDomainElement;
