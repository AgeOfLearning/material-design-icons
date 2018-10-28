import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePublishElement
 * @class IconBaselinePublishElement
 * @extends {AoflElement}
 */
class IconBaselinePublishElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePublishElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-publish';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePublishElement.is, IconBaselinePublishElement);

export default IconBaselinePublishElement;
