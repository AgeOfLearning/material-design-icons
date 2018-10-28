import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFlagElement
 * @class IconBaselineFlagElement
 * @extends {AoflElement}
 */
class IconBaselineFlagElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFlagElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-flag';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFlagElement.is, IconBaselineFlagElement);

export default IconBaselineFlagElement;
