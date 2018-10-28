import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGroupWorkElement
 * @class IconBaselineGroupWorkElement
 * @extends {AoflElement}
 */
class IconBaselineGroupWorkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGroupWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-group-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGroupWorkElement.is, IconBaselineGroupWorkElement);

export default IconBaselineGroupWorkElement;
