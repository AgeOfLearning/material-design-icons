import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMoreVertElement
 * @class IconBaselineMoreVertElement
 * @extends {AoflElement}
 */
class IconBaselineMoreVertElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMoreVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-more-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMoreVertElement.is, IconBaselineMoreVertElement);

export default IconBaselineMoreVertElement;
