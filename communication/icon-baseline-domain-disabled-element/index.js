import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDomainDisabledElement
 * @class IconBaselineDomainDisabledElement
 * @extends {AoflElement}
 */
class IconBaselineDomainDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDomainDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-domain-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDomainDisabledElement.is, IconBaselineDomainDisabledElement);

export default IconBaselineDomainDisabledElement;
