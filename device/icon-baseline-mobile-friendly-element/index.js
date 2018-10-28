import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMobileFriendlyElement
 * @class IconBaselineMobileFriendlyElement
 * @extends {AoflElement}
 */
class IconBaselineMobileFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMobileFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-mobile-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMobileFriendlyElement.is, IconBaselineMobileFriendlyElement);

export default IconBaselineMobileFriendlyElement;
