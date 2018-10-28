import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTvOffElement
 * @class IconBaselineTvOffElement
 * @extends {AoflElement}
 */
class IconBaselineTvOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTvOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-tv-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTvOffElement.is, IconBaselineTvOffElement);

export default IconBaselineTvOffElement;
