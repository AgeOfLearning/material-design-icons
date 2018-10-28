import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDomainElement
 * @class IconBaselineDomainElement
 * @extends {AoflElement}
 */
class IconBaselineDomainElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDomainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-domain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDomainElement.is, IconBaselineDomainElement);

export default IconBaselineDomainElement;
