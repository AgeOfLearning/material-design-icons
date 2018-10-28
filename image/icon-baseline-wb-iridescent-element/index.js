import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWbIridescentElement
 * @class IconBaselineWbIridescentElement
 * @extends {AoflElement}
 */
class IconBaselineWbIridescentElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWbIridescentElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wb-iridescent';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWbIridescentElement.is, IconBaselineWbIridescentElement);

export default IconBaselineWbIridescentElement;
