import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalSeeElement
 * @class IconBaselineLocalSeeElement
 * @extends {AoflElement}
 */
class IconBaselineLocalSeeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalSeeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-see';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalSeeElement.is, IconBaselineLocalSeeElement);

export default IconBaselineLocalSeeElement;
