import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCachedElement
 * @class IconBaselineCachedElement
 * @extends {AoflElement}
 */
class IconBaselineCachedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCachedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cached';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCachedElement.is, IconBaselineCachedElement);

export default IconBaselineCachedElement;
