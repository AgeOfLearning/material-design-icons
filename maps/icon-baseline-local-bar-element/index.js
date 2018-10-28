import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalBarElement
 * @class IconBaselineLocalBarElement
 * @extends {AoflElement}
 */
class IconBaselineLocalBarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalBarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-bar';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalBarElement.is, IconBaselineLocalBarElement);

export default IconBaselineLocalBarElement;
