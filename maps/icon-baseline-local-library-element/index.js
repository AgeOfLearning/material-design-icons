import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalLibraryElement
 * @class IconBaselineLocalLibraryElement
 * @extends {AoflElement}
 */
class IconBaselineLocalLibraryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalLibraryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-library';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalLibraryElement.is, IconBaselineLocalLibraryElement);

export default IconBaselineLocalLibraryElement;
