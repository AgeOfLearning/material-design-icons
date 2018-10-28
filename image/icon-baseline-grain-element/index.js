import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineGrainElement
 * @class IconBaselineGrainElement
 * @extends {AoflElement}
 */
class IconBaselineGrainElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineGrainElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-grain';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineGrainElement.is, IconBaselineGrainElement);

export default IconBaselineGrainElement;
