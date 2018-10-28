import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsBikeElement
 * @class IconBaselineDirectionsBikeElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsBikeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsBikeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-bike';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsBikeElement.is, IconBaselineDirectionsBikeElement);

export default IconBaselineDirectionsBikeElement;
