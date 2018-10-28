import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewStreamElement
 * @class IconBaselineViewStreamElement
 * @extends {AoflElement}
 */
class IconBaselineViewStreamElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewStreamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-stream';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewStreamElement.is, IconBaselineViewStreamElement);

export default IconBaselineViewStreamElement;
