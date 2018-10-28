import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDeveloperModeElement
 * @class IconBaselineDeveloperModeElement
 * @extends {AoflElement}
 */
class IconBaselineDeveloperModeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDeveloperModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-developer-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDeveloperModeElement.is, IconBaselineDeveloperModeElement);

export default IconBaselineDeveloperModeElement;
