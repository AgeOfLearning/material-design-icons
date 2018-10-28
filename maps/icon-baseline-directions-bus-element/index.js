import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsBusElement
 * @class IconBaselineDirectionsBusElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsBusElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsBusElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-bus';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsBusElement.is, IconBaselineDirectionsBusElement);

export default IconBaselineDirectionsBusElement;
