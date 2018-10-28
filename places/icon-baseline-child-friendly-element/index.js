import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChildFriendlyElement
 * @class IconBaselineChildFriendlyElement
 * @extends {AoflElement}
 */
class IconBaselineChildFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChildFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-child-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChildFriendlyElement.is, IconBaselineChildFriendlyElement);

export default IconBaselineChildFriendlyElement;
